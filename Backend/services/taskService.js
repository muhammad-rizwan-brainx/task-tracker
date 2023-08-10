const mongoose = require("mongoose");
const Task = require("../models/taskModel");

exports.getAllTasks = () => {
  return Task.find().exec();
};

exports.addTask = async (title, description, isCompleted) => {
  console.log(isCompleted)
  const detailsTask = new Task({ 
    title: title,
    description: description,
    isCompleted: isCompleted,
  });
  console.log(detailsTask)
  return await detailsTask.save();
};

exports.getTask = async (id) => {
  return await Task.findById(id).select("title description isCompleted").exec();
};

exports.updateTask = async (id, payload) => {
  return await Task.updateOne({ _id: id }, { $set: payload }).exec();
};

exports.deleteTask = async (id) => {
  return await Task.deleteOne({ _id: id }).exec();
};
