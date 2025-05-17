                                                        //ยังไม่ขึ้น
import Baradmin from "../components/Card/cloer/Baradmin";
import DetailsCard from "../components/Card/cloer/DetailsCard";
import Pagination from "../components/Card/Pagination";



const HomepageAdmin = () => {
  return (
    <div>
      
      <Baradmin/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3 ">
       <DetailsCard/>
       <DetailsCard/>
       <DetailsCard/>
       <DetailsCard/>
       <DetailsCard/>
       <DetailsCard/>
      </div>
      {/* Pagination แยกมาไว้ข้างนอก grid */}
        <div className="flex justify-center mt-8">
          <Pagination />
        </div>

      
    </div> 
  );
};

export default HomepageAdmin;



