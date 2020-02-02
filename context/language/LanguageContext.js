import React from 'react';
import { AsyncStorage } from 'react-native'
import R from 'ramda'
import ThaiWord from './th';
import EnglishWord from './en';
import moment from 'moment'
import 'moment/locale/th'

export const LanguageContext = React.createContext();

export const languages = {
  th: {
    title: 'th',
    word: ThaiWord,
  },
  en: {
    title: 'en',
    word: EnglishWord,
  },
};

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: languages.th.title,
      word: languages.th.word,
    };
  }

  componentDidMount() {
    this.init()
  }

  init = async () => {
    const value = await AsyncStorage.getItem('@language')
    this.setState({
      language: R.isNil(value) ? languages.th.title : value,
      word: R.isNil(value) ? languages.th.word : languages[value].word,
    })
  }

  updateLanguage = async (e) => {
    this.setState({
      language: languages[e].title,
      word: languages[e].word,
    });
    moment.locale(languages[e].title)
    await AsyncStorage.setItem('@language', languages[e].title);
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          word: this.state.word,
          updateLanguage: this.updateLanguage,
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageContext;
