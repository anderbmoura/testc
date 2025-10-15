import React from 'react';
import { View, ScrollView } from 'react-native';
import { CardAlert } from './CardAlert';

/**
 * Componente de teste visual para CardAlert
 * Use este arquivo para testar visualmente o componente
 */
export default function CardAlertTest() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ padding: 16, gap: 16 }}>
        {/* Teste 1: Info básico */}
        <CardAlert
          variant="info"
          title="Importante"
          description="Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus."
        />

        {/* Teste 2: Success com texto longo */}
        <CardAlert
          variant="success"
          title="Operação realizada com sucesso"
          description="Esta é uma descrição muito longa para testar se o componente se adapta corretamente ao conteúdo sem cortar o texto. O componente deve ter altura automática e se ajustar ao tamanho do texto, permitindo que todo o conteúdo seja visível sem overflow."
        />

        {/* Teste 3: Warning com ação */}
        <CardAlert
          variant="warning"
          title="Atenção"
          description="Lorem ipsum dolor sit amet, consecte adipiscing elit."
          action={{
            label: 'Button',
            onPress: () => console.log('Warning action'),
          }}
        />

        {/* Teste 4: Danger com texto longo E ação */}
        <CardAlert
          variant="danger"
          title="Erro crítico no sistema"
          description="Ocorreu um erro grave que requer sua atenção imediata. Por favor, revise as configurações e tente novamente. Se o problema persistir, entre em contato com o suporte técnico para obter assistência adicional."
          action={{
            label: 'Contatar suporte',
            onPress: () => console.log('Danger action'),
          }}
        />

        {/* Teste 4.5: Smart Tips básico */}
        <CardAlert
          variant="smart_tips"
          title="Dica Importante"
          description="Lorem ipsum dolor sit amet, consecte adipiscing elit. Curabitur et tempus."
        />

        {/* Teste 4.6: Smart Tips com ação */}
        <CardAlert
          variant="smart_tips"
          title="Dica Importante"
          description="Aproveite esta funcionalidade para melhorar sua experiência."
          action={{
            label: 'Ver mais',
            onPress: () => console.log('Smart Tips action'),
          }}
        />

        {/* Teste 5: Largura 100% - dentro de container menor */}
        <View style={{ width: 300, backgroundColor: '#ddd', padding: 8 }}>
          <CardAlert
            variant="info"
            title="Largura 100%"
            description="Este card deve ocupar 100% do container pai (300px)."
          />
        </View>

        {/* Teste 6: Largura 100% - dentro de container maior */}
        <View style={{ width: '100%', backgroundColor: '#ddd', padding: 8 }}>
          <CardAlert
            variant="success"
            title="Largura flexível"
            description="Este card deve ocupar 100% da largura disponível, independente do tamanho do container."
          />
        </View>
      </View>
    </ScrollView>
  );
}
