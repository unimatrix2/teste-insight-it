export const formatCNPJ = (cnpj) => cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

export const formatTEL = (telephone) => telephone.replace(/^(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');

export const formatCEP = (cep) => cep.replace(/^(\d{5})(\d{3})/, '$1-$2');