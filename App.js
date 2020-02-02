import { Provider } from 'mobx-react';
import React from 'react';
import { Platform, StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { LanguageProvider } from './context/language/LanguageContext';
import Navigation from './screens/routes';
import { spy } from 'mobx'
import stores from './stores';

const AppContainer = createAppContainer(Navigation);

spy(event => {
  if (event.type === "action") {
    console.log(`${event.name}`)
  }
})


export default function App() {
  return (
    <Provider {...stores}>
      <LanguageProvider>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <AppContainer />
      </LanguageProvider>
    </Provider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
