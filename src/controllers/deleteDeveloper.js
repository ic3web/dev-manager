const { Developer, DeveloperTechnologies } = require("../models");

const deleteDeveloper = async (req, res) => {
  const { id } = req.params;

  try {
    Developer.destroy({ where: { id: id } });
    DeveloperTechnologies.destroy({where: {devId: id}});
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(403).json({ message: "Failed to delete developer" });
  }
};

module.exports = {
  deleteDeveloper,
}