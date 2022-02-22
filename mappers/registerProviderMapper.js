const registerProviderMapper = (provider) => ({
    name: provider.name,
    officialRegistry: provider.officialRegistry,
    cnpj: provider.cnpj,
    segment: provider.segment,
    address: {
        postalCode: provider.postalCode,
        street: provider.street,
        number: provider.number,
        complement: provider.complement
    },
    telephone: provider.telephone,
    email: provider.email
});

export default registerProviderMapper;