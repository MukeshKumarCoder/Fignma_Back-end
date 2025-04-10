const DesignFile = require("../Models/DesignFileModel");

exports.createDesignFile = async (req, res) => {
  try {
    const { projectId, name } = req.body;

    if (!projectId || !name) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    const designFile = await DesignFile.create({
      project: projectId,
      name,
    });

    return res.status(200).json({
      success: true,
      message: "Design File is Created",
      designFile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong while creating DesignFile",
    });
  }
};

exports.saveCanvasData = async (req, res) => {
  try {
    const { id } = req.params;
    const { canvasData } = req.body;

    const designFile = await DesignFile.findByIdAndUpdate(
      id,
      { canvasData },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Design file Updated successfully",
      designFile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong while updating DesignFile",
    });
  }
};

exports.getDesignFile = async (req, res) => {
  try {
    const designFile = await DesignFile.findById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "got all the Design Files",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong while getting Design Files",
    });
  }
};
