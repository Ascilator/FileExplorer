export const getFileModel = (sequelize, { DataTypes }) => {
  const FileModel = sequelize.define('Files', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
    },
  });
  return FileModel;
};
