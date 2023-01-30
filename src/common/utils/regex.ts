export const nameRegexp = new RegExp(/^[аА-яієїґ]/);

export const phoneRegexp = new RegExp(/^(\+38)\d{3}\d{7}$/);

export const addressRegexp = new RegExp(/^([аА-яієїґ]+)([,][ ]|[ ]+)([0-9]{1,3})/);

export const minSymbolsRegexp = new RegExp(/.{3,}/)