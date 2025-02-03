import hero from "./assets/Hero.png";
import dashboard from "./assets/dashboard.png";
import { CiPaperplane } from "react-icons/ci";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <div className="flex">
        <div className="m-16 w-1/3">
          <h1 className="font-extrabold text-4xl">
            Effortless Expense Management, <br></br>Made Simple.
          </h1>
          <h2 className="text-xl mt-4">
            Automate invoice processing to eliminate manual data entry and
            errors.
          </h2>
          <div className="flex flex-col mt-4">
            <h6 className="text-xl">
              Why Choose Our AI-Powered Invoice Processing?
            </h6>
            <ul className="mt-2">
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-[18px] h-[18px] text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Automate invoice extraction, approval & validation
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-[18px] h-[18px] text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                Reduce errors & eliminate manual data entry{" "}
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-[18px] h-[18px] text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                Get real-time expense tracking & reporting{" "}
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-[18px] h-[18px] text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                Secure cloud-based access for teams{" "}
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-[18px] h-[18px] text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                Easily integrate with your existing tools
              </li>
            </ul>
            <button className="btn btn-accent !btn-wide mt-4">
              Get Started <CiPaperplane className="text-xl font-bold" />
            </button>
          </div>
        </div>
        <div className="mt-8 w-1/2">
          <img src={hero} />
        </div>
      </div>
      <div className="flex flex-col items-center align-center m-16">
        <h1 className="text-3xl font-extrabold">
          Get a custom dashboard to keep track of your expenses!
        </h1>
        <img className="m-8 w-1/2 h-1/2" src={dashboard} alt="" />
      </div>
      <Footer/>
    </>
  );
}

export default App;
