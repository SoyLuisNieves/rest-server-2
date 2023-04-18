const Role = require('../models/role');
const itsValidRole = async(role = '') => {
    const existsRole = await Role.findOne({ role });
    if( !existsRole ) {
            throw new Error(`El role ${ role } no esta registrado en la base de datos`);
    }
}

module.exports = {
    itsValidRole,
}