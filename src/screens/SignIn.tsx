import { VStack, Heading, Icon, useTheme } from 'native-base';

import Ionicons from '@expo/vector-icons/Ionicons';

import React from 'react';

import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/input';

export function SignIn() {
    const { colors } = useTheme();
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
        <Logo />

        <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
            Acesse sua Conta!
        </Heading>

        <Input
            placeholder="E-mail"
            mb={4}
            InputLeftElement={<Ionicons name='mail' size={32} color='green' />}
        />
        <Input
            placeholder="Senha"
            InputLeftElement={<Ionicons name='key' size={32} color='green' />}


        />


    </VStack>


}