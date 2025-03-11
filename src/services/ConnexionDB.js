const Sequelize = require("sequelize"); // Import de Sequelize

function Connexion() {
    // Configuration de la connexion à MySQL
    const db = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost", // Remplace "db" par "localhost" si tu es en local
            dialect: "mysql"
        }
    );

    // Test de la connexion à la base de données
    db.authenticate()
        .then(() => {
            console.log("✅ Connecté à la base de données MySQL !");
        })
        .catch(err => {
            console.error("❌ Impossible de se connecter à la base de données :", err);
        });

    return db; 
}

module.exports = Connexion;
