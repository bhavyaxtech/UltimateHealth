import React from 'react';
import { Dimensions } from 'react-native';
import { YStack, Text, Button, useTheme } from 'tamagui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../type';
import LottieView from 'lottie-react-native';

interface GuestPlaceholderScreenProps {
  title?: string;
  description?: string;
}

const { width } = Dimensions.get('window');

const animationSize = width * 0.7;

const GuestPlaceholderScreen: React.FC<GuestPlaceholderScreenProps> = ({
  title = 'Join the Community',
  description = 'Sign up or sign in to access personalized features, interact with the community, and manage your profile.',
}) => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const theme = useTheme();

  return (
    <YStack
      flex={1}
      backgroundColor={theme.background.val}
      paddingHorizontal="$5"
      paddingTop={inset.top + 20}
      paddingBottom="$5"
      justifyContent="center"
      alignItems="center"
    >
      {/* Lottie Animation */}
      <YStack
        alignItems="center"
        justifyContent="center"
        marginBottom="$5"
      >
        <LottieView
          source={require('../../assets/animations/lock-animation.json')}
          autoPlay
          loop
          renderMode="AUTOMATIC"
          resizeMode="contain"
          style={{
            width: animationSize,
            height: animationSize,
          }}
        />
      </YStack>

      {/* Title */}
      <Text
        fontSize={28}
        fontWeight="800"
        color={theme.color.val}
        textAlign="center"
        marginBottom="$3"
      >
        {title}
      </Text>

      {/* Description */}
      <Text
        fontSize={16}
        color={theme.color10.val}
        textAlign="center"
        lineHeight={24}
        paddingHorizontal="$3"
        marginBottom="$8"
      >
        {description}
      </Text>

      {/* Buttons */}
      <YStack width="100%" space="$4">
        {/* Sign In Button */}
        <Button
          backgroundColor="$primary"
          size="$6"
          borderRadius="$5"
          pressStyle={{ scale: 0.97 }}
          animation="fast"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            });
          }}
        >
          <Text
            fontSize={18}
            color="white"
            fontWeight="700"
          >
            Sign In
          </Text>
        </Button>

        {/* Sign Up Button */}
        <Button
          size="$6"
          borderRadius="$5"
          borderWidth={1}
          borderColor={theme.borderColor.val}
          backgroundColor="transparent"
          pressStyle={{ scale: 0.97 }}
          animation="fast"
          onPress={() => {
            navigation.navigate('SignUpScreenFirst');
          }}
        >
          <Text
            fontSize={18}
            color={theme.color.val}
            fontWeight="700"
          >
            Sign Up
          </Text>
        </Button>
      </YStack>
    </YStack>
  );
};

export default GuestPlaceholderScreen;
