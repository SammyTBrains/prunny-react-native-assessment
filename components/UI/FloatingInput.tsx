import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewProps,
} from "react-native";
import { Colors } from "../../constants/colors";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { forwardRef, useState } from "react";

interface IProps extends TextInputProps {
  leftIcon?: React.ReactNode;
  label?: string;
  rightElement?: React.ReactNode;
  containerStyle?: ViewProps["style"];
}

//Input component with floating label functionality
export const FloatingInput = forwardRef<TextInput, IProps>(
  (
    {
      leftIcon,
      label,
      value,
      onBlur,
      rightElement,
      containerStyle,
      style,
      onFocus,
      ...rest
    },
    ref
  ) => {
    const [inputFocus, setInputFocus] = useState(false);
    const isFocusStyle = useDerivedValue(
      () => withTiming(inputFocus ? 1 : 0),
      [inputFocus]
    );

    const floatingLabelStyle = useAnimatedStyle(() => {
      const fontSize = interpolate(isFocusStyle.value, [0, 1], [14, 14]);
      const translateY = interpolate(isFocusStyle.value, [0, 1], [0, -29]);
      return {
        fontSize,
        transform: [{ translateY }],
      };
    });

    const onFocusFn = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(e);
      setInputFocus(true);
    };

    const onBlurFn = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(e);
      if (value === "") setInputFocus(false);
    };

    return (
      <View style={[styles.inputContainer, containerStyle]}>
        {leftIcon && leftIcon}
        <View style={styles.innerInputContainer}>
          {label && (
            <Animated.Text style={[styles.labelStyle, floatingLabelStyle]}>
              {label}
            </Animated.Text>
          )}
          <View style={styles.rightContainer}>
            <TextInput
              ref={ref}
              onFocus={onFocusFn}
              onBlur={onBlurFn}
              style={[styles.input, style]}
              {...rest}
            />
            {rightElement && rightElement}
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  rightContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  innerInputContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    backgroundColor: "white",
  },
  labelStyle: {
    position: "absolute",
    left: 0,
    fontFamily: "Mulish-500",
    color: Colors.blackApp,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    gap: 10,
    borderColor: Colors.greyLight,
    borderRadius: 16,
    height: 56,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    width: "100%",
    fontFamily: "Mulish-500",
  },
});
