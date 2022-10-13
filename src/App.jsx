import React from 'react'
import initialValues from './js/Values.js'
import ProfileVlan from './Components/Vlan/ProfileVlan';
import Pons from './Components/Vlan/Pons'
import ValueContext from "./js/ValueContext";
import Uplink from './Components/Uplink/Uplink'
import Style from './App.module.css'
import Dba from './Components/DBA/Dba'
import Header from './Components/Header/Header'
import AimLine from './Components/Line/AimLine'
import ProfileLineBridge from './Components/Line/ProfileLineBridge';
import ProfileLineRouter from './Components/Line/ProfileLineRouter';
import SelectDeviceBridge from './Components/Line/SelectDeviceBridge';
import SelectDeviceRouter from './Components/Line/SelectDeviceRouter';
import AutoConfig from './Components/AutoConfig/AutoConfig';

export default function App() {

  //Hook para armazenar o modelo do equipamento
  const [checked, setChecked] = React.useState(true)
  const handleChangeCheckbox = () => {
    setChecked(!checked)
  }

  //Hook para armazenar os valores dos inputs
  const [values, setValues] = React.useState(initialValues);
  const handleChange = (e) => {

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <ValueContext.Provider value={{ values, setValues, handleChange, checked }}>
      <div className={Style.container}>

        {/* Select para o equipamento */}
        <div id="start" className={Style.title}>
          <div className={Style.selectContainer}>
            <h2 className={Style.h2}>Escolha o Concentrador que será configurado:</h2>
            <select className={Style.select} onChange={handleChangeCheckbox}>
              <option>G16</option>
              <option>G08</option>
            </select>
          </div>

          <h1 className={Style.h1}>{checked ? "G16" : "G08"} - Configurações de Auto Provisionamento</h1>

          {/* Limpa os valores dos inputs */}
          <button onClick={() => setValues(initialValues)}>Limpar tudo</button>

        </div>
        {/* Menu Lateral */}
        <ul className={Style.menu}>
          <a href="#start"><li className={Style.menuItem}> Inicio</li></a>
          <hr />
          <a href="#Pdba"><li className={Style.menuItem}> Profile DBA</li></a>
          <a href="#aim"><li className={Style.menuItem}> Aim Vlan</li></a>
          <a href="#uplink"><li className={Style.menuItem}> Uplink</li></a>
          <a href="#vlan"><li className={Style.menuItem}> Profile Vlan</li></a>
          <a href="#aimLine"><li className={Style.menuItem}> Aim Line</li></a>
          <a href="#profileLine"><li className={Style.menuItem}> Profile Line</li></a>
          <a href="#autoconfig"><li className={Style.menuItem}> Auto Config</li></a>
        </ul>
        {/* Todos os componentes são chamados aqui */}
        <Header />
        <Dba />
        <Pons />
        <Uplink />
        <ProfileVlan />
        <AimLine />
        <SelectDeviceBridge />
        <SelectDeviceRouter />
        <ProfileLineBridge />
        <ProfileLineRouter />
        <AutoConfig />
      </div>
    </ValueContext.Provider >
  )
}