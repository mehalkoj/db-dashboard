import Sidebar from "./components/Sidebar";
import { ListTables, GetTable } from "./api/queries";



ListTables();
export default function Home() {
  return (
    <main className="min-w-screen min-h-screen">

    <div className="">
        <Sidebar />
    </div>

    <div className="">
      {/* <Viewer /> */}
    </div>

    {/* Modal Type Components */}
    {/* 
      <RowInserPanel />
    
      <ColumnInsertPanel /> 
    */}
    
    
    </main>
  );
}
