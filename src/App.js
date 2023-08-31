
var feed = require("./feedpedia.png")
var note = require("./feedhome.png")
var git = require("./git.png")
var linked = require("./linkded.png")
var timer = require("./timer.png")
var clg = require('./vignan.jpg')

function App() {
  return (
    
    <>
      <div className="scroll-smooth z-10">
            <div 
        className="
        container-full
        bg-gray-200
        pl-4
        pr-4
        h-10
        flex
        justify-between
        relative
        ">
        <div className="pt-1">
            <div>
                <a className="underline hover:font-bold hover:no-underline hover:text-lg hover:text-sky-700 delay-100 text-sm font-mono text-slate-700 text-base" href="#">About</a>
            </div>
        </div>
        <div className="pt-1 flex justify-evenly">
            <div>
                <a className="underline hover:font-bold hover:no-underline hover:text-lg hover:text-sky-700 delay-100 text-sm font-mono text-slate-700 text-base" 
                href="#education">Education
                </a>
            </div>
            <div className="pl-2 pr-2">
                <a className="underline hover:font-bold hover:no-underline hover:text-lg hover:text-sky-800 delay-100 text-sm font-mono text-slate-700 text-base" 
                href="#projects">Projects</a>
            </div>
            <div className="pr-2">
                <a className="underline hover:font-bold hover:no-underline hover:text-lg hover:text-sky-800 delay-100 text-sm font-mono text-slate-700 text-base" 
                href="#technologies">
                Skills
                </a>
            </div>
            <div>
                <a className="underline hover:font-bold hover:no-underline hover:text-lg hover:text-sky-800 delay-100 text-sm font-mono text-slate-700 text-base" 
                href="#contactme">Contact</a>
            </div>
        </div>
        </div>
        <div className="container-full max-sm:p-1 bg-slate-100 p-4" id="">
            <div className="p-8 border-2">
                <p className="font-sans font-sm text-slate-600">
                    software engineer with Bachelor's degree in computer science and 2+ years experience at top MNC Tata Consultancy Services.
                    Increased code delivery speed by 7% and code accuracy by 12%, while regularly contributing to open source projects. Seeking to leverage proven leadership and expertise to become the next software engineer at a BigTech Company.
                </p><br/>
                <h3 className="font-bold font-mono text-md">
                    Work Experience 
                    <small className="text-xs">at Systems Engineer, Tata Consultancy Services Sez, Gachibowli, TN
                        August 2021–August 2023</small>
                </h3>
                <p className="clear-left p-3 m-3 font-mono text-sm">
                    ● Collaborated with cross-functional teams to develop and implement software solutions that meet business requirements
                    <br/>● Developed and maintained software applications using Python 3 and Bash.
                    <br/>● worked on data migration and disaster recovery operations.
                    <br/>● Collaborated and contributed to team developing Automation Tools used across the team.
                </p>
            </div>
        </div>
        <div className="container-full bg-indigo-100 p-4" id="education">
        <img src={clg} className="float-right w-20 h-20 m-3 rounded-full"></img>
            <div className="p-8 border-2 border-slate-400"> 
                <h3 className="font-bold font-mono text-lg underline">
                Bachelor of Technology (B.TECH.)
                <small className="text-xs">in Computer Science and Engineering</small></h3>
                <p className="text-basic font-sm text-slate-600">
                    Vignan Lara Institution Of Technology and Sciences affiliated to JNTUK, Vadlamudi, AP
                    August 2017–May 2021
                </p>
              <br/>
              <h4 className="text-sm p-3 font-bold">● Relevant Coursework:</h4>
              <p className="pl-3">
                <small className="italic underline">Distributed Systems</small>,
                <small className="italic underline">Machine Learning</small>,
                <small className="italic underline">Computer Security and Privacy</small>,
                <small className="italic underline">Computer Networks</small>,
                <small className="italic underline">Advanced Data Structures and Algorithms</small>,
                <small className="italic underline">Artificial Neural networks</small>
              </p>
              <p className="pl-3 pt-2 text-sm font-bold">
                ● Percentage
                <small className="italic"> - 75% .</small>
              </p>
            </div>
        </div>
        <div className="container-full h-full bg-pink-100 p-4" id="projects">
            
            <div className="border-2 flex flex-wrap">
                <div className="shadow-sm max-md:w-full max-lg:w-full max-sm:w-full max-2xl:w-1/2 w-1/2">
                    <img alt="x" src={feed} className="w-20 h-20 float-right m-3"/>
                    <p className="clear-left p-3 m-3 font-mono text-sm">
                        This is a personal project that showcases my skill in MongodbCRUD,aggregations and NodeJS express framework for
                        backend, ReactJs Library for FrontEnd purpose and Tailwind css for responsive styling and jwt for security, etc.
                        <br/>
                        <br/>● Users can post something and can perform CRUD operations on their posts.
                        <br/>● Implement JWT token verification as a middleware to cross verify user identity and security.
                        <br/>● User session lasts for 5 minutes and then automatically gets logged out.
                        <br/><br/>
                        ● <a href="https://main.dfwasqu2oc736.amplifyapp.com/" target="_blank" className="text-sky-600">Porject Live here"</a>
                    </p>
                </div>
                <div className="shadow-sm max-md:w-full max-lg:w-full max-sm:w-full max-2xl:w-1/2 w-1/2">
                    <img alt="x" src={note} className="w-20 h-20 float-right m-3"/>
                    <p className="clear-left p-3 m-3 font-mono text-sm">
                        This is a personal project that showcases my skill in ReactJs Library and its hooks like useState and useEffect 
                        for FrontEnd purpose and Tailwind css for responsive styling etc.<br/>
                        <br/>● This project was built as part of assignment at Ecowise
                        <br/>● Works similar to google keep application 
                        <br/>● User can perform CRUD operation on a note and also can pin and unpin the note
                        <br/>● Pagination has been implemented as the grid had been limited to only a six note per page
                        <br/><br/>
                        ● <a target="_blank" className="text-sky-600" href="https://gowthamu7.github.io/notekeeper/">Check my work "</a>
                    </p>
                </div>
                <div className="shadow-sm max-md:w-full max-lg:w-full max-sm:w-full max-2xl:w-1/2 w-1/2">
                    <img alt="x" src={timer} className="w-20 h-20 float-right m-3"/>
                    <p className="clear-left p-3 m-3 font-mono text-sm">
                    This is a personal project that showcases my skill in ReactJs Library and its hooks like useState and useEffect 
                        for FrontEnd purpose and Tailwind css for responsive styling etc.
                        <br/>
                        <br/>● Users can provide input in terms of minutes and seconds in multiple of hundreds etc.
                        <br/>● Given Input gets converted to appropiate minutes and seconds.
                        <br/>● Users can interact with the timer using buttons like START, PAUSE, RESET.
                        <br/><br/>
                        ● <a href="https://gowthamu7.github.io/Timer/" target="_blank" className="text-sky-600">Porject Live here"</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="container-full h-full bg-slate-100 border-1" id="technologies">
            <div className="shadow-sm w-full h-full flex flex-wrap">
                <div className="max-lg:w-1/2 border p-4 max-sm:w-full max-md:w-full w-1/3 max-sm:m-4 max-md:m-3">
                    <h5 className="text-2xl underline font-serif w-full max-sm:text-center">Programming</h5>
                    <div className="m-3 p-1">
                        <p className="font-mono">Javascript</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-3/4 block"></div>
                        </div>
                    </div>
                    <div className="m-3 p-1">
                        <p className="font-mono">Java 11</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-2/3 block"></div>
                        </div>
                    </div>
                    <div className="m-3 p-1">
                        <p className="font-mono">Python3</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-3/4 block"></div>
                        </div>
                    </div>
                    <div className="m-3 p-1">
                        <p className="font-mono">MySql</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-3/4 block"></div>
                        </div>
                    </div>
                    <div className="m-3 p-1">
                        <p className="font-mono">Bash scripting</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-3/4 block"></div>
                        </div>
                    </div>
                    <div className="m-3 p-1">
                        <p className="font-mono">C++</p>
                        <div className="rounded-xl delay-100 hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="delay-100 rounded-xl hover:bg-blue-500 bg-blue-300 h-full w-1/2 block"></div>
                        </div>
                    </div>
                </div>
                <div className="max-lg:w-1/2 border-2 p-4 border p-4 max-sm:w-full max-md:w-full w-1/3 max-sm:m-4 max-md:m-3">
                    <h5 className="text-2xl underline font-serif w-full max-sm:text-center">Frameworks</h5>
                    <div className="m-3 p-1">
                        <p className="font-mono">ReactJS</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-3/4 block"></div>
                        </div>
                    </div>
                    <div className="m-3 p-1">
                        <p className="font-mono">Object Oreinted Design</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-3/4 block"></div>
                        </div>
                    </div>
                    <div className="m-3 p-1">
                        <p className="font-mono">NodeJS</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-3/4 block"></div>
                        </div>
                    </div>
                    <div className="m-3 p-1">
                        <p className="font-mono">Tailwind css</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-3/4 block"></div>
                        </div>
                    </div>
                    <div className="m-3 p-1">
                        <p className="font-mono">AngularJs</p>
                        <div className="rounded-xl delay-100 hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="delay-100 rounded-xl hover:bg-blue-500 bg-blue-300 h-full w-1/2 block"></div>
                        </div>
                    </div>
                </div>
                <div className="max-lg:ml-56 max-lg:w-1/2 border p-4 max-sm:w-full w-1/3 max-md:w-full max-sm:m-4 max-md:m-3">
                    <h5 className="text-2xl underline font-serif w-full max-sm:text-center">Tools</h5>
                    <div className="m-1 p-1">
                        <p className="font-mono">Postman</p>
                        <div className="rounded-xl hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="rounded-xl hover:bg-green-500 bg-green-300 h-full w-3/4 block"></div>
                        </div>
                    </div>
                    <div className="m-1 p-1">
                        <p className="font-mono">MongoDB Atlas</p>
                        <div className="rounded-xl bg-slate-300 h-2 w-full block hover:bg-slate-200">
                            <div className="rounded-xl bg-green-300 h-full w-3/4 block hover:bg-green-500"></div>
                        </div>
                    </div>
                    <div className="m-1 p-1">
                        <p className="font-mono">Jira</p>
                        <div className="rounded-xl bg-slate-300 hover:bg-slate-200 h-2 w-full block">
                            <div className="rounded-xl bg-green-300 h-full w-48 block hover:bg-green-500"></div>
                        </div>
                    </div>
                    <div className="m-1 p-1">
                        <p className="font-mono">Git</p>
                        <div className="rounded-xl delay-100 hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="delay-100 rounded-xl hover:bg-blue-500 bg-blue-300 h-full w-1/2 block"></div>
                        </div>
                    </div>
                    <div className="m-1 p-1">
                        <p className="font-mono">Npm</p>
                        <div className="rounded-xl delay-100 hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="delay-100 rounded-xl hover:bg-blue-500 bg-blue-300 h-full w-1/2 block"></div>
                        </div> 
                    </div>
                    <div className="m-1 p-1">
                        <p className="font-mono">MongoDB Compass</p>
                        <div className="rounded-xl delay-100 hover:bg-slate-200 bg-slate-300 h-2 w-full block">
                            <div className="delay-100 rounded-xl hover:bg-blue-500 bg-blue-300 h-full w-1/2 block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2 relative container-full h-96 flex bg-gray-200 justify-center shadow-xl" id="contactme">
            <form className="top-5
                        pt-4
                        pl-2
                        pr-2
                        pb-2
                        w-3/4 
                        absolute
                        md:w-3/4
                        md:h-10
                        lg:w-2/3
                        rounded-xl
                        m-3
                        ">
                <div className="m-2">
                    <input
                    className="w-full rounded-l
                    outline-none
                    border
                    border-blue-200
                    focus:ring-2
                    focus:invalid:ring-pink-800
                    focus:border-none
                    p-2
                    "
                    placeholder="E m a i l"
                    type="email"
                    />
                </div>
                <div className="m-2">
                    <input
                    className="w-full rounded-l
                    outline-none
                    border
                    border-blue-200
                    focus:ring-2
                    p-2
                    "
                    placeholder="S u b j e c t"
                    type="text"
                    />
                </div>
                <div className="m-2">
                    <textarea
                    className="w-full h-40 rounded-l
                    outline-none
                    border
                    border-blue-200
                    focus:ring-2
                    p-2
                    "
                    placeholder="B o d y"
                    ></textarea>
                    <button className="
                    mt-4
                    bg-blue-600 
                    text-slate-100
                    rounded-l
                    w-20
                    h-8
                    font-mono
                    hover:bg-blue-700
                    focus:ring-2
                    focus:ring-blue-300
                    "
                    type="button"
                    >Contact</button>
                </div>
            </form>
        </div>
        </div>
        <div className="absolute z-10 h-30 bg-slate-700 w-full p-6">
            <div className="text-white flex justify-between">
                <a target="_blank" href="https://github.com/GowthamU7/"><img alt="x" src={git} className="h-10 m-2"/></a>
                <p className="">&copy; Gowtham Ullangula</p>
                <a target="_blank" href="https://www.linkedin.com/in/gowtham-ullangula-b07348170/"><img alt="x" src={linked} className="h-10 m-2 rounded-full"/></a>
            </div>
        </div>
        </>
  )
}

export default App;
