
const userAuth = async (req, res, next) => {
    try {
       
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: error.message });
    }
}


module.exports = userAuth;