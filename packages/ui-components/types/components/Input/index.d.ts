import { ColorTokens, FontSizeTokens } from 'tamagui';
export declare const InputContext: import('@tamagui/web').StyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
}>;
export declare const defaultInputGroupStyles:
  | {
      readonly borderColor: '$borderColor';
      readonly backgroundColor: '$color2';
      readonly minWidth: 0;
      readonly hoverStyle: {
        readonly borderColor: '$borderColorHover';
      };
      readonly focusStyle: {
        readonly outlineColor: '$outlineColor';
        readonly outlineWidth: 2;
        readonly outlineStyle: 'solid';
        readonly borderColor: '$borderColorFocus';
      };
      readonly tabIndex: number;
      readonly size: '$true';
      readonly fontFamily: '$body';
      readonly borderWidth: 1;
      readonly outlineWidth: 0;
      readonly color: '$color';
    }
  | {
      readonly borderColor: '$borderColor';
      readonly backgroundColor: '$color2';
      readonly minWidth: 0;
      readonly hoverStyle: {
        readonly borderColor: '$borderColorHover';
      };
      readonly focusStyle: {
        readonly outlineColor: '$outlineColor';
        readonly outlineWidth: 2;
        readonly outlineStyle: 'solid';
        readonly borderColor: '$borderColorFocus';
      };
      readonly focusable: boolean;
      readonly size: '$true';
      readonly fontFamily: '$body';
      readonly borderWidth: 1;
      readonly outlineWidth: 0;
      readonly color: '$color';
    };
export declare const InputContainerFrame: import('tamagui').TamaguiComponent<
  import('@tamagui/web').TamaDefer,
  import('tamagui').TamaguiElement,
  import('@tamagui/core').RNTamaguiViewNonStyleProps,
  import('@tamagui/web').StackStyleBase,
  {
    size?: import('tamagui').SizeTokens | undefined;
    color?: ColorTokens | undefined;
    gapScale?: number | undefined;
  },
  import('@tamagui/web').StaticConfigPublic
>;
export declare const InputLabel: import('tamagui').TamaguiComponent<
  import('@tamagui/web').TamaDefer,
  import('react-native').View | HTMLButtonElement,
  import('@tamagui/web').TamaguiComponentPropsBaseBase &
    Omit<
      import('tamagui').TextNonStyleProps,
      'size' | 'unstyled' | keyof import('@tamagui/web').TextStylePropsBase
    > &
    import('@tamagui/web').WithThemeValues<
      import('@tamagui/web').TextStylePropsBase
    > & {
      size?: import('tamagui').SizeTokens | FontSizeTokens | undefined;
      unstyled?: boolean | undefined;
    } & import('@tamagui/web').WithShorthands<
      import('@tamagui/web').WithThemeValues<
        import('@tamagui/web').TextStylePropsBase
      >
    > &
    import('@tamagui/web').WithPseudoProps<
      import('@tamagui/web').WithThemeValues<
        import('@tamagui/web').TextStylePropsBase
      > & {
        size?: import('tamagui').SizeTokens | FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
      } & import('@tamagui/web').WithShorthands<
          import('@tamagui/web').WithThemeValues<
            import('@tamagui/web').TextStylePropsBase
          >
        >
    > &
    import('@tamagui/web').WithMediaProps<
      import('@tamagui/web').WithThemeShorthandsAndPseudos<
        import('@tamagui/web').TextStylePropsBase,
        {
          size?: import('tamagui').SizeTokens | FontSizeTokens | undefined;
          unstyled?: boolean | undefined;
        }
      >
    > & {
      htmlFor?: string;
    } & import('react').RefAttributes<
      import('react-native').View | HTMLButtonElement
    >,
  import('@tamagui/web').StackStyleBase,
  {
    size?: FontSizeTokens | undefined;
  },
  import('@tamagui/web').StaticConfigPublic
>;
export declare const Input: import('react').ForwardRefExoticComponent<
  Omit<
    import('@tamagui/core').RNTamaguiViewNonStyleProps,
    keyof import('@tamagui/web').StackStyleBase | 'size' | 'color' | 'gapScale'
  > &
    import('@tamagui/web').WithThemeValues<
      import('@tamagui/web').StackStyleBase
    > & {
      size?: import('tamagui').SizeTokens | undefined;
      color?: ColorTokens | undefined;
      gapScale?: number | undefined;
    } & import('@tamagui/web').WithShorthands<
      import('@tamagui/web').WithThemeValues<
        import('@tamagui/web').StackStyleBase
      >
    > &
    import('@tamagui/web').WithPseudoProps<
      import('@tamagui/web').WithThemeValues<
        import('@tamagui/web').StackStyleBase
      > & {
        size?: import('tamagui').SizeTokens | undefined;
        color?: ColorTokens | undefined;
        gapScale?: number | undefined;
      } & import('@tamagui/web').WithShorthands<
          import('@tamagui/web').WithThemeValues<
            import('@tamagui/web').StackStyleBase
          >
        >
    > &
    import('@tamagui/web').WithMediaProps<
      import('@tamagui/web').WithThemeShorthandsAndPseudos<
        import('@tamagui/web').StackStyleBase,
        {
          size?: import('tamagui').SizeTokens | undefined;
          color?: ColorTokens | undefined;
          gapScale?: number | undefined;
        }
      >
    > &
    import('react').RefAttributes<import('tamagui').TamaguiElement>
> &
  import('@tamagui/web').StaticComponentObject<
    import('@tamagui/web').TamaDefer,
    import('tamagui').TamaguiElement,
    import('@tamagui/core').RNTamaguiViewNonStyleProps,
    import('@tamagui/web').StackStyleBase,
    {
      size?: import('tamagui').SizeTokens | undefined;
      color?: ColorTokens | undefined;
      gapScale?: number | undefined;
    },
    import('@tamagui/web').StaticConfigPublic
  > &
  Omit<
    import('@tamagui/web').StaticConfigPublic,
    'staticConfig' | 'extractable' | 'styleable'
  > & {
    __tama: [
      import('@tamagui/web').TamaDefer,
      import('tamagui').TamaguiElement,
      import('@tamagui/core').RNTamaguiViewNonStyleProps,
      import('@tamagui/web').StackStyleBase,
      {
        size?: import('tamagui').SizeTokens | undefined;
        color?: ColorTokens | undefined;
        gapScale?: number | undefined;
      },
      import('@tamagui/web').StaticConfigPublic,
    ];
  } & {
    Box: import('tamagui').TamaguiComponent<
      import('@tamagui/web').GetFinalProps<
        import('@tamagui/core').RNTamaguiViewNonStyleProps &
          import('tamagui').GroupExtraProps & {
            __scopeGroup?: import('tamagui').Scope;
          },
        import('@tamagui/web').StackStyleBase,
        {
          elevation?: number | import('tamagui').SizeTokens | undefined;
          inset?:
            | number
            | import('tamagui').SizeTokens
            | {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number;
              }
            | null
            | undefined;
          size?: any;
          unstyled?: boolean | undefined;
          transparent?: boolean | undefined;
          fullscreen?: boolean | undefined;
          circular?: boolean | undefined;
          hoverTheme?: boolean | undefined;
          pressTheme?: boolean | undefined;
          focusTheme?: boolean | undefined;
          elevate?: boolean | undefined;
          bordered?: number | boolean | undefined;
          backgrounded?: boolean | undefined;
          radiused?: boolean | undefined;
          padded?: boolean | undefined;
          chromeless?: boolean | 'all' | undefined;
          scaleIcon?: number | undefined;
          applyFocusStyle?: boolean | undefined;
        }
      >,
      import('tamagui').TamaguiElement,
      import('@tamagui/core').RNTamaguiViewNonStyleProps &
        import('tamagui').GroupExtraProps & {
          __scopeGroup?: import('tamagui').Scope;
        } & void,
      import('@tamagui/web').StackStyleBase,
      {
        elevation?: number | import('tamagui').SizeTokens | undefined;
        inset?:
          | number
          | import('tamagui').SizeTokens
          | {
              top?: number;
              bottom?: number;
              left?: number;
              right?: number;
            }
          | null
          | undefined;
        size?: any;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | 'all' | undefined;
        scaleIcon?: number | undefined;
        applyFocusStyle?: boolean | undefined;
      },
      import('@tamagui/web').StaticConfigPublic
    >;
    Area: import('tamagui').TamaguiComponent<
      import('@tamagui/web').GetFinalProps<
        import('@tamagui/web').TamaguiComponentPropsBaseBase &
          import('react-native').TextInputProps &
          import('tamagui').InputExtraProps,
        import('@tamagui/web').TextStylePropsBase & {
          readonly placeholderTextColor?:
            | Omit<
                | import('@tamagui/core').ColorTokens
                | import('@tamagui/web').ThemeValueFallbackColor,
                'unset'
              >
            | undefined;
          readonly selectionColor?:
            | Omit<
                | import('@tamagui/core').ColorTokens
                | import('@tamagui/web').ThemeValueFallbackColor,
                'unset'
              >
            | undefined;
        },
        {
          size?: import('tamagui').SizeTokens | undefined;
          disabled?: boolean | undefined;
          unstyled?: boolean | undefined;
        }
      >,
      import('react-native').TextInput,
      import('@tamagui/web').TamaguiComponentPropsBaseBase &
        import('react-native').TextInputProps &
        import('tamagui').InputExtraProps &
        void,
      import('@tamagui/web').TextStylePropsBase & {
        readonly placeholderTextColor?:
          | Omit<
              | import('@tamagui/core').ColorTokens
              | import('@tamagui/web').ThemeValueFallbackColor,
              'unset'
            >
          | undefined;
        readonly selectionColor?:
          | Omit<
              | import('@tamagui/core').ColorTokens
              | import('@tamagui/web').ThemeValueFallbackColor,
              'unset'
            >
          | undefined;
      },
      {
        size?: import('tamagui').SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
      },
      {
        isInput: true;
        accept: {
          readonly placeholderTextColor: 'color';
          readonly selectionColor: 'color';
        };
      } & import('@tamagui/web').StaticConfigPublic
    >;
    Section: import('tamagui').TamaguiComponent<
      import('@tamagui/web').TamaDefer,
      unknown,
      import('@tamagui/web').TamaguiComponentPropsBaseBase &
        import('tamagui').GroupItemProps & {
          __scopeGroup?: import('tamagui').Scope;
        } & import('react').RefAttributes<unknown>,
      import('@tamagui/web').StackStyleBase,
      {},
      import('@tamagui/web').StaticConfigPublic
    >;
    Label: import('tamagui').TamaguiComponent<
      import('@tamagui/web').TamaDefer,
      import('react-native').View | HTMLButtonElement,
      import('@tamagui/web').TamaguiComponentPropsBaseBase &
        Omit<
          import('tamagui').TextNonStyleProps,
          'size' | 'unstyled' | keyof import('@tamagui/web').TextStylePropsBase
        > &
        import('@tamagui/web').WithThemeValues<
          import('@tamagui/web').TextStylePropsBase
        > & {
          size?: import('tamagui').SizeTokens | FontSizeTokens | undefined;
          unstyled?: boolean | undefined;
        } & import('@tamagui/web').WithShorthands<
          import('@tamagui/web').WithThemeValues<
            import('@tamagui/web').TextStylePropsBase
          >
        > &
        import('@tamagui/web').WithPseudoProps<
          import('@tamagui/web').WithThemeValues<
            import('@tamagui/web').TextStylePropsBase
          > & {
            size?: import('tamagui').SizeTokens | FontSizeTokens | undefined;
            unstyled?: boolean | undefined;
          } & import('@tamagui/web').WithShorthands<
              import('@tamagui/web').WithThemeValues<
                import('@tamagui/web').TextStylePropsBase
              >
            >
        > &
        import('@tamagui/web').WithMediaProps<
          import('@tamagui/web').WithThemeShorthandsAndPseudos<
            import('@tamagui/web').TextStylePropsBase,
            {
              size?: import('tamagui').SizeTokens | FontSizeTokens | undefined;
              unstyled?: boolean | undefined;
            }
          >
        > & {
          htmlFor?: string;
        } & import('react').RefAttributes<
          import('react-native').View | HTMLButtonElement
        >,
      import('@tamagui/web').StackStyleBase,
      {
        size?: FontSizeTokens | undefined;
      },
      import('@tamagui/web').StaticConfigPublic
    >;
  };
//# sourceMappingURL=index.d.ts.map
