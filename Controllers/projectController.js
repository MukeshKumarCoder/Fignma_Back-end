const Project = required("../Models/ProjectModel.js");

exports.createProject = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Project name is required",
      });
    }

    const project = await Project.create({
      name,
      owner: req.user._id,
      collaborators: [req.user._id],
    });

    return res.status(200).json({
      success: true,
      message: "Project Created successfully",
      project,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong while creating the Project",
    });
  }
};

exports.getUserProject = async (req, res) => {
  try {
    const project = await Project.find({ collaborators: req.user._id });

    return res.status(200).json({
      success: true,
      message: "got all the projects",
      project,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong while getting all Project",
    });
  }
};
