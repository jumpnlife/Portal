import { View } from "react-native";
import { AuthError } from "firebase/auth";
import * as AppleAuthentication from "expo-apple-authentication";
import ErrorBox from "./ErrorBox";
import SuccessBox from "./SuccessBox";
import { H2 } from "./StyledText";
import { useTailwind } from "tailwind-rn";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  header?: JSX.Element;
  footer?: JSX.Element;
  error?: AuthError;
  success?: string;
}

export default function FormLayout({
  children,
  title,
  header,
  footer,
  error,
  success,
}: Props) {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex-1 items-center justify-center")}>
      {header && <View style={tailwind("mb-4")}>{header}</View>}
      <View style={tailwind("p-8 w-full max-w-sm")}>
        {title && <H2>{title}</H2>}
        {children}
        {error && <ErrorBox error={error} />}
        {success && <SuccessBox message={success} />}
      </View>
      {footer && <View style={tailwind("mt-4")}>{footer}</View>}
    </View>
  );
}
