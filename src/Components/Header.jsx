import React from 'react'
import img1 from '../images/logo.png'
import { FaSearchDollar } from 'react-icons/fa'; // عشان اجيب أيكونز في الصفحه عندي

function Header({search}) {

const onSearch = (keyword) => {
    search(keyword)
}



  return (
    <>
        <header className="bg-warning py-3 text-center">
            <div className="container">
                    <div className="row">
                    <div className="col-md-2">
                        <a href="/">
                            <img src={img1} className='w-50' alt="" />
                        </a>
                    </div>
                    <div className="col-md-10">
                        <div className="input-group mt-3">
                            <span className="input-group-text" id="basic-addon1"> <FaSearchDollar /> </span>
                            <input type="text" onChange={(e) => onSearch(e.target.value) } className="form-control" placeholder="إبحث عن فيلمك المُفضل" />
                            {/* هنا بفوله لو حصل تغير في تيكست السيرش جي هتعملي الفانكشن بتاعه اون سيرشن الي عملتها فوق */}
                            {/*   وبباصي ليها ايفينت وبناديله بالتارجيت فاليو بتاعته بحيث تتغير كل م اكتب حاجه معينه علطول */}
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </>
  )
}

export default Header