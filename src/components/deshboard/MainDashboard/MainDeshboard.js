import React from 'react';
import Logo from '../../common/logo/Logo';
import './mainDashbaord.css'

const MainDeshboard = () => {

    return (
        <div className="dashboard">
            <div className="dashboardBody">
                <aside>
                    <Logo design={{fontSize:"30px", color:"#fff"}} />
                    <p><i class="fa-solid fa-house"></i> Dashboard</p>
                    <br />
                    <h5>Management</h5>
                    <p><i class="fa-solid fa-users"></i> Users</p>
                    <p><i class="fa-solid fa-chart-pie"></i> Analytics</p>
                    <p><i class="fa-solid fa-list-check"></i> Manage Blog</p>
                    <p><i class="fa-solid fa-key"></i> Authentication</p>
                    <p><i class="fa-solid fa-user-plus"></i> Add New Admin</p>
                    <br />
                    <p><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</p>
                </aside>
                <main className="bodyContent">
                    <div className='header'>
                        <div><i class="fa-solid fa-bars left"></i></div>

                        <div></div>
                        <div className='heading'><i class="fa-solid fa-bell"></i> <i class="fa-solid fa-gear"></i> <i class="fa-solid fa-language"></i> <i class="fa-solid fa-user-tie"></i> <small>Kate Bisop </small> </div>
                    
                    </div>
             
                        
                    <div className='content'>    
                                 <div>                              
                                <h1>Overview</h1> 
                                    <div className="grid-container">     
                                        <div className="col">
                                            <h4>Total Viewers</h4>
                                            <h2>40,300</h2>
                                        </div>
                                        <div className="col">
                                            <h4>Total Posts</h4>
                                            <h2>3,100</h2>
                                        </div>
                                        <div className="col">
                                            <h4>Total Comments</h4>
                                            <h2>10,880</h2>
                                        </div>
                                    </div>
                            
                                </div>                         
                                <div>                    
                                    <div className="grid-container">     
                                        <div className="col">
                                            <h4>Active Users</h4>
                                            <h2>4,300</h2>
                                        </div>
                                        <div className="col">
                                            <h4>Upcoming Events</h4>
                                            <h2>4</h2>
                                        </div>
                                        <div className="col">
                                            <h4>Populer Categories</h4>
                                            <h3>#Technology</h3>
                                            <h3>#Science</h3>
                                            <h3>#Astrography</h3>
                                        </div>                                
                                    </div>                            
                                    <div className="grid-container">     
                                        <div className="col">
                                            <h4>Lorem</h4>
                                            <h2>999</h2>
                                        </div>
                                        <div className="col">
                                            <h4>Lorem</h4>
                                            <h2>999</h2>
                                        </div>
                                        <div className="col">
                                            <h4>Lorem</h4>
                                            <h2>999</h2>
                                        </div>                                
                                    </div>                            
                                </div>                        
                        
                    </div>
                    <div>
                        
                    </div>
                    
                    

                </main>
            </div>



        </div>
    );
};

export default MainDeshboard;