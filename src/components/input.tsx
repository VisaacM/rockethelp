import { Input as NativeBaseInput, IInputProps } from 'native-base';
import React from 'react';

export function Input({ ...rest }: IInputProps) {
    return (
        <NativeBaseInput
            bg="gray.700"
            h={1}
            size="md"
            borderWidth={0}
            fontSize="md"
            fontFamily="body"
            color="white"
            placeholderTextColor="gray.300"
            {...rest}
        />


    );
}
/*
Ignite Lab de React Native | Aula 2 - O início da especialização em React Native
1:13:43
*/