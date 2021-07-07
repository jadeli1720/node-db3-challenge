const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

// GOTCHA!!! DON'T FORGET TO RETURN!!!!!!

function find() {
    //select * from schemes
    return db('schemes')
};

function findById(id) {
    //select * from schemes where id = 123
    return db('schemes')
        .where(({ id }))
        .first()
};

function findSteps(id) {
    /*
    select * Steps as St
    join Scheme as sc on sc.id = st.scheme_id
    where st.id = id
    */
    return db('steps as st')
        .join('schemes as sc', 'sc.id', 'st.scheme_id')
        .select(
            'st.id',
            'sc.scheme_name',
            'st.step_number',
            'st.instructions'
        )
        .where({ "sc.id": id })

};


function add(scheme) {
    //insert into schemes() values()
    return db('schemes')
        .insert(scheme)
        .then(ids => {
            return findById(ids[0])
        })
};

//not working
function addStep(step, scheme_id) {
    return db('steps as st')
        .insert(step)
        .join('schemes as sc', 'sc.id', 'st.scheme_id' )
        .then(ids => {
            return findById(ids[0])
        })

};

function update(changes,id) {
    //update  schemes set  where id = 123
    return db('schemes')
        .where({id})
        .update(changes)
};

function remove(id) {
    //delete from schemes where...
    return db('schemes')
        .where('id', id)
        .del()
}

