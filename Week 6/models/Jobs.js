module.exports = (sequelize, DataTypes) => {
  const Jobs = sequelize.define("Jobs", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }
  });

  return Jobs;
};

