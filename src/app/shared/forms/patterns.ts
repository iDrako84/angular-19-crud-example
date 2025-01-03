export const Patterns = {
    NAME: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð& ,.'-]*$/,
    TELEPHONE: '[0-9]{9,14}',
    EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    NUMBER: /^([0-9])*$/,
};