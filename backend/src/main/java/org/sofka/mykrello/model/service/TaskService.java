package org.sofka.mykrello.model.service;

import java.util.List;

import org.sofka.mykrello.model.domain.BoardDomain;
import org.sofka.mykrello.model.domain.ColumnForBoardDomain;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.repository.BoardRepository;
import org.sofka.mykrello.model.repository.ColumnForBoardRepository;
import org.sofka.mykrello.model.repository.ColumnRepository;
import org.sofka.mykrello.model.repository.TaskRepository;
import org.sofka.mykrello.model.service.interfaces.TaskServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TaskService implements TaskServiceInterface  {

    @Autowired
    private LogService logService;

    @Autowired

    private BoardRepository boardRepository;

    @Autowired
    private ColumnRepository columnRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ColumnForBoardRepository columnForBoardRepository;






    public List<TaskDomain> findAllTasksById(Integer idBoard) {
        // TODO Auto-generated method stub
       return null;
        }


    @Transactional(readOnly = true)
    public TaskDomain findById(Integer id) {
        var task = taskRepository.findById(id);
        return task.isPresent() ? task.get() : null;
    }

    @Override
    @Transactional
    public TaskDomain create(TaskDomain task) {
        var newTask = taskRepository.save(task);
        var tasks = columnRepository.findAll();
        if (!tasks.isEmpty()) {
            tasks.forEach(column -> {
                var columnForBoard = new ColumnForBoardDomain();
                columnForBoard.setColumn(column);
                columnForBoardRepository.save(columnForBoard);
            });
        }
        return newTask;
    }

    @Override
    public TaskDomain update(Integer id, TaskDomain task) {
        return null;
    }

    @Override
    public TaskDomain delete(Integer id) {

        return null;

    }
//
//
//    @Override
//    public TaskDomain update(Integer id, TaskDomain task) {
//        task.setId(id);
//        return taskRepository.save(task);
//    }
//
//    @Override
//    public TaskDomain delete(Integer id) {
//        var optionalTask = taskRepository.findById(id);
//        if (optionalTask.isPresent()) {
//            var column = optionalTask.get();
//            var taskForColumn = column.getId();
//            if (!taskForColumn.equals()) {
//                taskForColumn.forEach((task) -> {
//                    columnForBoardRepository.delete(task);
//                });
//            }
//            columnRepository.delete((optionalColumn.get()));
//            return optionalColumn.get();
//
//        }
//        return null;
//    }

}
