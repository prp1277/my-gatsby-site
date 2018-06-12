const header = (
    <Header>
       <Logo title="LinkedIn" link="https://prp1277.github.io/static/LinkedIn-dfbd71c0fae03cd7d16ce2433df200e9.jpg"/>
       <NavigationList>
           <NavigationItem link="#home" text="Home"/>
           <NavigationItem text="Team">
               <NavigationList>
                   <NavigationItem link="#local" text="Local"/>
                   <NavigationItem link="#" text="Remote"/>
                   <NavigationItem link="#" text="Desktop"/>
                   <NavigationItem link="#" text="Train"/>
               </NavigationList>
           </NavigationItem>
           <NavigationItem link="#contact" text="Contact"/>
           <NavigationItem link="#" text="About Us"/>
       </NavigationList>
       <input type="search" placeholder="Search..."/>
    </Header>
)
render(header, document.getElementById('header'));
