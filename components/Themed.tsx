import { useState } from "react";
import {
  Text as DefaultText,
  View,
  TextInput as DefaultTextInput,
  Pressable as DefaultPressable,
  TextProps,
  TextInputProps,
  PressableProps,
} from "react-native";
import DefaultCheckbox, { CheckboxProps } from "expo-checkbox";
import { useTailwind } from "tailwind-rn";
import useColorScheme from "../hooks/useColorScheme";

interface ThemedCheckboxProps extends CheckboxProps {
  label: string;
}

interface ThemedButtonProps extends PressableProps {
  icon?: () => JSX.Element;
}

export function Text(props: TextProps) {
  const { children, style, ...otherProps } = props;

  const tailwind = useTailwind();

  return (
    <DefaultText
      style={[tailwind("text-black dark:text-white"), style]}
      {...otherProps}
    >
      {children}
    </DefaultText>
  );
}

export function TextInput(props: TextInputProps) {
  const { style, ...otherProps } = props;

  const tailwind = useTailwind();
  const colorScheme = useColorScheme();

  return (
    <DefaultTextInput
      placeholderTextColor={colorScheme === "dark" ? "#000" : "#fff"}
      style={[
        tailwind(
          "w-full bg-black dark:bg-white rounded-md h-12 px-6 text-white dark:text-black"
        ),
        style,
      ]}
      {...otherProps}
    />
  );
}

export function Checkbox(props: ThemedCheckboxProps) {
  const { style, label, ...otherProps } = props;

  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex flex-row bg-transparent")}>
      <DefaultCheckbox style={[tailwind("mr-2"), style]} {...otherProps} />
      {label && <Text>{label}</Text>}
    </View>
  );
}

export function Link(props: PressableProps) {
  const { children, onPress, ...otherProps } = props;
  const [hovered, setHovered] = useState(false);

  const tailwind = useTailwind();

  return (
    <DefaultPressable
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      {...otherProps}
    >
      <Text
        style={[
          tailwind("font-bold"),
          hovered ? tailwind("text-blue-500") : tailwind("text-blue-400"),
        ]}
      >
        {children}
      </Text>
    </DefaultPressable>
  );
}

export function Button(props: ThemedButtonProps) {
  const { children, icon, onPress, style, ...otherProps } = props;

  const tailwind = useTailwind();

  return (
    <DefaultPressable
      onPress={onPress}
      style={[
        tailwind(
          "h-12 border-2 border-black dark:border-white rounded-md flex flex-row justify-center items-center px-6"
        ),
        style,
      ]}
      {...otherProps}
    >
      {icon && <View style={{ marginRight: 8 }}>{icon()}</View>}
      <View style={tailwind("flex-1 flex items-center")}>
        <Text
          style={tailwind("text-black dark:text-white text-base font-medium")}
        >
          {children}
        </Text>
      </View>
    </DefaultPressable>
  );
}
