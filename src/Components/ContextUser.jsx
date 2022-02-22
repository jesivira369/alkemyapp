import React from 'react';

const ContextUser = React.createContext();

export const ProviderUser = ContextUser.Provider;
export const ConsumerUser = ContextUser.Consumer;

export default ContextUser;