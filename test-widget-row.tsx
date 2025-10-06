import React from 'react';
import { View } from 'react-native';
import { WidgetRow } from './packages/ui-components/src/templates/cards/WidgetRow';
import { CardWidget } from './packages/ui-components/src/components/CardWidget';
import { CardWidgetFooter } from './packages/ui-components/src/components/CardWidgetFooter';

export const TestWidgetRow = () => {
  return (
    <View style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
      <WidgetRow>
        <CardWidget
          topLabel="Saldo disponível"
          mainLabel="R$ 1.234,56"
          variant="highlight"
          onPress={() => console.log('Saldo pressionado')}
        >
          <CardWidgetFooter label="Disponível" value="Hoje" variant="neutral" />
        </CardWidget>

        <CardWidget
          topLabel="Este é um texto muito muito longo que pode quebrar"
          mainLabel="R$ 999.999.999,99"
          variant="success"
          onPress={() => console.log('Limite pressionado')}
        >
          <CardWidgetFooter
            label="Total disponível para uso"
            value="Mensal"
            variant="success"
          />
        </CardWidget>
      </WidgetRow>
    </View>
  );
};
