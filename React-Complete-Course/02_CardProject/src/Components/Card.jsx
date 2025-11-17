import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
  return (
    <div className='h-screen w-full bg-black p-10'>
        <div className="card h-100 w-[25%] border-4 bg-white text-black rounded-4xl p-4 flex flex-col justify-between">
            <div className="top  flex justify-between items-center">
                <img className='h-14 rounded-4xl border p-2 mt-3' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACUCAMAAABcK8BVAAAAulBMVEUjHyD////4mB0AAAAZExVlZGQfGxz49/chHiD/nR38mh0bGyAIAAAfHSDbiiTy8vIPBwkUDxDl5eVCP0AAACDf3t6+vb0lJCQADiAAESDKycnT0tI7ODmNjIwVGSANFiCxsbGZmJh4d3fRhCQACCCxbx5ta2yDg4NRUFAzLzClpKRKSUnIfyMsJCDwkx3ojx5cWlpVOyCcYx82KSBrRh97Tx9MNSA+LSCTXiD/pB1ePx+GViCoaR+9dh70/PrsAAALNklEQVR4nL2caXuiMBCAo8EAgnK03gdqlYpHpbXXtvX//61N8AQSYECdT/tsAd8kk5nJZBJUgos9ck0LZRbLdEd2jp9B4DearocBYAEc7rvNW6M1xhK2CAyMCbGwNW7cEK03QTgH14EOo0nvNmhyb26ZucECONOa9+Tro/VcqIbxxMJu5p7LiGa4xFKKkyGkWMQ1rogmj4l+Da696GScaVSzoPXm+ZWfJwTPs4xqOpoxwNI1wZhIeJA+qqloveUVx/Is+jK141LQ5PH1u2wvEk7TuGQ0w8W3AWOC3WS2RLSuZ96ODCHT6+ZFa1o3GsyjSFaS009AG1/XZPCE4HEONDoBbg3GJGEyiNDkyV3IKNtExCZAM+5FxtgE1pePJlduOjXDYlb4/cZFu9to7kUwply05zv2GRPzOSva4K59xgQPsqGNbuLPk0UfZUFr3r3PmOC4X4ih2a2b+wCekFZsFR1FM5a5Fid0nYl1XcdMdFPK0TprHjVvUbQcZoNhef5gMaKyWCzGz+6SUEAC5MOTZLQRmMyy+u4o2mDZaA7mLR0WuODIVAijNTxgUy3sN0Wplt5iCQqRiRfOPITR5jBbK0l+4mpcbi51QFvNuRhtARtOPE+MUgM4UNAXHtJLNNhwSmaGBRs1kyj7R8NDeolWgbgBq5/aZXvpAqaqXuGjdSHDafYzZ8tGAAXGF+09oxkPgOlkLjPmVJgAwgXp4fzdMxrEq0seJDkre9kbfeHnT2gGwLsQAksbd7OjEenUbSc0yAKKF8IkSiU7G15E0WyA4dC5QWmS9LK3m5x05Yi2AGgaFkwBu9sVTVuIth277YBmAKI0brQsd10aglhEGXPVEBA2EM8IoUFeRZzMWK+C99lxgrk5FoijObqrA9oye4dLnGVj82JjSCKcHIsMmAjS8hKtCQhtzfh49kI+XIrH0iA0ZHUv0CALz5OansTwwy2LxatAtMOyNECzIcF8NBiNr8FIvxjawaIHaKCwO95rUUWVHoqhHVqPeN9OFCs6XI1owwqj7ScCQ7NhC4KWO1h0G+dpGlPUwmgoGFGGtgBmXyQzWG56D/OKO3EfYm8XRzMXezTZzbdlRyTLNOl6OI5eGM1iaS0E8+yZhBQfUObjETDwTvoe7cZ9aqFVFC0IxCnac3E0Yukm8R58OkGa3Z4dj0zAaIMAreB4BikPdzy6nLSF0aQ+QzOKdBoxTc8fNYy0vVcoGosJURFVk7A3aGbaEYajdSkaJL6NgPWFqZjCaNQdotIkp1XDfsbley406g6R7OfavpPwInvFRg40yZeR3c8zQc05bCUKRiN9GzUAmZyT6LHE69XRKFieCWotYWA50OgURTm2CWhnixCMXnMxHsQTbznQmijHjizmTk250az0aSxCoxErhp4DbYwGYLOmuzyy5kSnS9F93VF8SQVH0wcIbNaiier9QE7Mc0TJ2TmBo1kTBDZrvB1Ce3mpFldBk3z0ALUdmNNpfkhhr4JGHhA0JJK8OFkkqX8dNA+1gK9w8kRGZLF4FTQKBkaL54liVvtKaEDhmdvniP0hXszz50ADi1SJe89o2tCqxB7JhQbsN4tjOqKWMZ6wyTegwBnKya4ZETRiFl9RBTMUGK6ZsTxRyYhkFsx4eq1UmkBLR0gfzWHN4aBFdY3wvL8NrRyX5giY8DA5uxlhi8v3/tC9VmS5KDrzc6DZ/Yuelwg/AIYmffRnaLzGQ7vMahJJtM5qwLSNxmvAGgWerrG0yUGTTE6Vy1FgpUp4BF0bcIxH0G99rJsm1icJG7igDVe2NujBVCCWyT2IPZpU3FFyhfLIBBTfWz0ETPyRhzwnaA4CMFTEs5EBNGz8NUs2AazepLkBznmY/l3QWM6jNAC6EJx7RCE5DDrdELiUzuJb+4hM4kak8QAYH2qEUMmGrpG5Vjcs8gC3ouGkHd9gSEKzWS4XWmhGODF4hMLXY/FHrw/RaYKCNLMLjleSi/FL3T7zy+HK864Fmm2sYShPOZ1kJYyp8SwF5ohcmpmFBC+zo2iNHBlT7Ao8krHwji0lypFNBlf6Wo0AzciTMtW9Z44RkcfLiz0rieyV0vDPKqPUNCq1WrLLknxjv7M3TlS2Wo3730TH/qh3EZvJjaaLw4V0hCV85dFZzYYO2n6+vr5+rbWOlvCbJtNTFKhowlPKej0VfMXCreUk2PppjsYT38OxJhLTf/aPZxCVYfv1bbd6YrKafW/5Td5/uXtAK/UTRnS4+7f67Ij+Sg4bZhgLinGl0/kYDX2sNvWTbFZT4W9KweZ9gJakpcOPqrp5f0zq/kyirWf1kDy1hc/u8yoBWmz3/FLaf2pVffpyEvo/gyjbXf1ptVrtdis6pAGacCgObjpAkysJ2qZ0VmpZfXlzOkVOYSrbn9evLdKGw9r28ydAEw6ota+/2ZegJJYz1tBOLdNR/UVOATiF2QxFUYZaTXtcUbSZEO3gpPdoRmKoqw3rapnCPX10isAxPqfzvh2iKVO7N9GAHkuxDuVOyeZaW9MxpXDV+jsqoHM1R3mvVzeftSnttc3PUPDYMbl4QEuJjLROwEZ7rv6L2vlma62t/dbVarn6M3SYronsGtHtEFpawVNNo/M0gKtu3r4ccNdpznD7tinTT1TrW4dNgz9RA0/ljke0Xsq3lcfvcsBGe07dfaynouHgvetMvz5W5aBt6pMydP4omnA8T5V7pwrT1KjN+XkJBpXRlTezz05nqKVPCkVzOs77blPdv6vu1tR6UFWbDQXvmqf4/oSWHoc7tV21eoRT1c3s49NpJ3ZezZmi199dWVWPTfp+rFH/wjRNNJ7nVdG5mjm93EMbfh9/JKCrbp7+Xh8fp84wMFnHx6jxqmlDp/34qP3O6i9V9dge9eXdoX9vU9Px7YjIzgnZM1qGZbzSWZ87LpgTqvpvs/v++Pmkht7pBOJoaP35+v47e1L/qRdPV8uzKQOqaZv6t9im2Ry0TPXMmvOxUS/g9mNbfaEhxWo3C4SGPfXNC/vf0GM0RugE83r4uvkbimb45YLi8rxBUmx06jin/baphn816D8mKpPgX7E/b36PaqlsX4U+RbosZbxEy1ZnqrS3fy9qDC5BqurL9/YcHCjiqRM6mxw625Ixeao5iJnPbHT0sc3v2snkQcLF5SE0OeuSrNau/R5saAqX+rL7cDrZnIckyUK0UjNzcq7maJ/f9XJcrS6xqi+rjy8ta7SimOE8SeT0GWDBqGid6dfvrl4OVD9KpaovT3/UnwG8bXQ7M3pmzwOtl7WOs/58f1tRY3GYoMH03DzNfn++1h1QFGBF94CjaOCjcYo27EynDrOyH1TeqfXV2sxDpKyCoxKvNoidD4VnQAJA5poCGdIIO88X4tuB8VO197klIEY2joHE0eRbXpQhJONcoME5Ji2DDshdRXTeqXze4XJYavMKYnI3I7hH8u18B5LzirXkJtX5dyw0Wndks1r8NKLgZooeJJFekOxBkLUW3efR6N9J38SnOYW3oDTmd5mn+ly4TSm+O0b272DfsC8uoU241saY3PpeGyK8ASUFjfqsPDcSAMikcdKvJ9/u1LzGdXAisfTkqwlT7sRiu003Et1P2b1Mu0lMvsEVZ0wkPEirIU+/f603v8FMzXI5XIZb64zBtTXOynIzXLa7/hrzYrc2hkUyxWYWjFaSm61r2TiCWxnvDM16r6Qx9q7Rc8T0xlnPA2S/jdMek6I9Rz/AP0VdEI3BQe9cCYmktwBg0JtfjYWPc9pgHfsL2NEO6H25Rm+CwdfSsgNqkx7wzEmOq3xL8sjtx3dlxWLivjuCHB/Kj0bh7OaEcA6GckQyyaRp5wArlf4DkgXXUkOi6pcAAAAASUVORK5CYII=" alt="" />
                <div>
                    <h3 className='flex justify-center text-gray-400 items-center border p-1 rounded text-[10px]'>Save <Bookmark size={16} /></h3>
                </div>
            </div>
            <div className="middle">
                <h3 className='text-xl'>Amazon <span className='text-gray-500 text-[15px] tracking-tighter '>5 days ago</span></h3>
                <h2 className='text-xl font-bold '>Senior Software Engineer</h2>
                <div className='flex gap-5 mt-2 '>
                    <h2 className='border p-2 rounded-xl w-fit text-[15px] font-semibold  bg-gray-200'>Part-Time</h2>
                    <h2 className='border p-2 rounded-xl w-fit text-[15px] font-semibold bg-gray-200'>Senior Level</h2>
                </div>
            </div>
            <hr  />
            <div className="bottom flex justify-between items-center">
                <div>
                    <h3 className='font-bold '>$120/hr</h3>
                <h5>Mumbai, India</h5>
                 </div> 
                <h5 className='bg-gray-900 p-2 text-white rounded-xl'>Apply Now</h5>

            </div>
        </div>
        
    </div>
  )
}

export default Card