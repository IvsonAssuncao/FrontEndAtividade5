// Componentes para incluir tarefas existentes editar, alterar, excluir


import React, { useState } from 'react';

const Task = ({ task, index, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(index, editedTask);
    setEditing(false);
  };

  return (
    <div className="list-group-item" style={{ backgroundColor: task.includes('estudar') || task.includes('ler') ? 'LightSkyBlue' : 'transparent' }}>
    {editing ? (      
        <>
        <div className='row mt-4'>
          <div className='col-8'>              
              <input className='form-control w-full'
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />                       
          </div>
          <div className="col-4">                            
                <button class="btn btn-outline-primary left" onClick={handleSave}>Salvar</button>              
          </div> 
          
        </div>    
        </>
      ) : (
        <>          
        <div className="row mt-4">          
            <div className="col-8">
              <input className='form-control w-full' type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)}
              />         
            </div>
            <div className="col-2">
              <button className="btn btn-outline-success w-full" onClick={handleEdit}>Editar</button>
            </div>
            <div className="col-2">              
              <button className="btn btn-outline-danger w-full" onClick={() => onDelete(index)}>Deletar</button>
            </div>
        </div> 

            
        </>
      )} 
    </div>     
  );

  
};

export default Task;
