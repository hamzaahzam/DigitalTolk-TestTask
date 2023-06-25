import React from 'react';
import { IS_IPHONE } from '../../constants';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

export const KeyboardAvoidingScrollView = props => {
  const { children } = props;
  return (
    <KeyboardAvoidingView
      { ...(IS_IPHONE ? { behavior: 'padding' } : { behavior: 'height' }) }
      style={ { flex: 1 } }>
      <ScrollView
        contentContainerStyle={ { flexGrow: 1 } }
        showsVerticalScrollIndicator={ false }
        keyboardShouldPersistTaps="handled">
        { children }
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
