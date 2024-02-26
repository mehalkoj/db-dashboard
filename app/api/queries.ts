import client from "./connection"




    

    /* try {
        const res = await client.query('SELECT * FROM experience')
        console.log(res.rows[0].title)
        console.log(res.rows[1].title)
        console.log(res.rows[2].title)

    } catch (err){
        console.error(err);
    } finally {
    await client.end()
    } 
    */



// Used when a user selects a table in the sidebar, this retrieves the data within it which is sent to the viewer
{/* export async function CurTable(tbname){
    try {
        const res = await client.query('SELECT * FROM ', tbname)
    }

}; */}

export async function ListTables(){
    try {
        const res = await client.query("SELECT table_name FROM information_schema.tables WHERE table_type = 'BASE TABLE' AND table_schema NOT IN ('pg_catalog', 'information_schema')");
        const tableNames = res.rows.map(row => row.table_name);
        console.log('Table names:', tableNames);
    } catch (err){
        console.error(err);
    } finally {
        client.end()
    }
};

// gets table data for viewer panel
export async function GetTable(tablename){
    try {
        const res = await client.query("SELECT * FROM", [tablename]);
        console.log(res.rows[0].title)
    } catch (err){
        console.error(err);
    } finally {
        client.end()
    };

}