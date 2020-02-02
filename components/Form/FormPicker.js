import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RNPickerSelect from "react-native-picker-select";
import R from 'ramda'
import { Chevron } from "react-native-shapes";
import { ThemeContext } from "../../context/ThemeContext";
import { emptyFn } from "../../utils/functions";
import Form from "./Form";
/**
 * 
 * usage:
 *  <FormPicker
      labelName="Title"
      items={[ {
        label: "test",
        value: '1'
      },
      {
        label: "test2",
        value: '2'
      } ]}
      onValueChange={(item, index) => onFieldChange('title', item)}
      width="40%"
      style={{ height: 50, width: 100 }}
      marginRight={0}
      isRequired
    />
 */
const Selection = props => {
  const {
    placeholder,
    width,
    height,
    borderRadius,
    onPress,
    editable = true
  } = props;
  const theme = useContext(ThemeContext);
  const styles = stylesheet(
    theme,
    theme.grey,
    width,
    height,
    borderRadius,
    editable
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props} style={styles.input} onPress={onPress}>
        <Text style={styles.text}>{placeholder}</Text>
        <Icon
          style={styles.icon}
          name="chevron-down"
          size={25}
          color={theme.grey2}
        />
      </TouchableOpacity>
    </View>
  );
};
const sports = [
  {
    label: "Football",
    value: "football"
  },
  {
    label: "Baseball",
    value: "baseball"
  },
  {
    label: "Hockey",
    value: "hockey"
  }
];

function FormPicker(props) {
  const {
    placeholder,
    width,
    height,
    borderRadius,
    onPress,
    editable = true,
    onValueChange,
    callPickerAPI,
    callPickerAPIParam = "",
    itemKey
  } = props;
  const theme = useContext(ThemeContext);
  const [ data, setData ] = useState([ { label: "", value: "" } ])
  useEffect(() => {
    const fetchData = async () => {
      const result = await callPickerAPI(callPickerAPIParam)
      const titles = [];
      result.data.data.map(x => titles.push({ label: x.name, value: x.code }))
      setData(titles);
    };
    fetchData();
  }, []);
  const styles = stylesheet(
    theme,
    theme.grey,
    width,
    height,
    borderRadius,
    editable
  );
  return (
    <Form {...props}>
      {
        newProps => {
          const pickerStyle = pickerSelectStyles(newProps.width, theme, editable);
          return (
            <RNPickerSelect
              placeholder={{
                label: placeholder,
                value: null,
              }}
              items={data}
              onValueChange={onValueChange}
              style={{
                ...pickerStyle,
                iconContainer: {
                  top: 26,
                  right: 15
                }
              }}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColor: "yellow" }}
              Icon={() => {
                return <Chevron size={1.5} color="gray" />;
              }}
              value={itemKey}
              disabled={!editable}
            />
          );
        }}
    </Form>
  );
}

FormPicker.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  height: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  borderRadius: PropTypes.number,
  onPress: PropTypes.func
};

FormPicker.defaultProps = {
  placeholder: "Select",
  width: "100%",
  height: 40,
  borderRadius: 0,
  onPress: emptyFn
};

const pickerSelectStyles = (width, theme, editable) => {
  return StyleSheet.create({
    inputIOS: {
      width,
      fontSize: 16,
      paddingVertical: 12,
      marginTop: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: theme.grey,
      borderRadius: 0,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor: editable ? theme.white : theme.grey,
      height: 40
    },
    inputAndroid: {
      width,
      marginTop: 10,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: theme.grey,
      borderRadius: 0,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor: editable ? theme.white : theme.grey,
      height: 40
    }
  });
};

function stylesheet(theme, borderColor, width, height, borderRadius, editable) {
  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
    input: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width,
      height,
      marginTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingTop: 10,
      borderColor,
      borderRadius,
      borderWidth: 1,
      backgroundColor: editable ? theme.white : theme.grey
    },
    text: {
      color: theme.grey2,
      textAlign: "left",
      minWidth: width - width * 0.55,
      fontSize: 15
    }
  });
}

export default FormPicker;
