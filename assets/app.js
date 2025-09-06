
const app = Vue.createApp({
data(){
    return{
  cityList:[],
  city:"İstanbul",
  name:"",
  time:"",
  temp_c:"",
  text:"",
  icon:"",
  cloud:"",
  humidity:"",
  uv:"",
  vis_km:"",
  wind_kph:""
  
}
},

methods:{
callApi(){
    fetch('https://api.weatherapi.com/v1/current.json?key=0be70cbd7ff948cb96a184335251606&q='+this.city+'&aqi=no')
    .then(res => res.json())
    .then(data =>{
this.name=data.location.name;
this.temp_c=data.current.temp_c;
this.wind_kph=data.current.wind_kph;
this.icon=data.current.condition.icon;
this.humidity=data.current.humidity;
this.uv=data.current.uv;
this.cloud=data.current.cloud;
this.vis_km=data.current.vis_km


    });
},

cityApi(){
    fetch('https://turkiyeapi.dev/api/v1/provinces')
    .then(res => res.json())
    .then(data => {
        this.cityList=data.data;
    })
  
},
updateTime() {
    const date = new Date();
    this.time = date.toLocaleTimeString();
  }


},



mounted(){

this.cityApi();
this.callApi();

setInterval(this.updateTime, 1000);
}
});






app.mount("#app");