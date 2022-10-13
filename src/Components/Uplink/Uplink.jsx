import React from 'react'
import options from '../../js/UplinkOptions'
import Style from './Uplink.module.css'
import ValueContext from "../../js/ValueContext";
import copyToClip from '../../js/BtnCopy';

export default function Uplink() {
  const { values, handleChange, checked } = React.useContext(ValueContext);

  return (
    <div id="uplink" className={Style.container}>
      <h2> Configuração da interface Uplink e criação das VLANs na OLT</h2>
      <div className={Style.content}>
        <h4 className={Style.h4}>3.1 DEFINA A PORTA UPLINK:</h4>

        <select defaultValue={values.uplink} onChange={handleChange} name="uplink">
          {options.map((option) => (
            <option key={option.key} value={option.value}>{option.label}</option>
          ))}
        </select>

        <h4 className={Style.h4}>3.2 CRIAR VLAN</h4>
        <code id="criarVlan" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('criarVlan').innerText)
        }>
          {checked ? <pre>vlan {values.vlanpon1}-{values.vlanpon16}</pre> : <pre>vlan {values.vlanpon1}-{values.vlanpon8}</pre>}
        </code>

        <h4 className={Style.h4}>3.3 CRIAR UPLINK</h4>
        <code id="bloco2" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('bloco2').innerText)
        }>
          <pre>interface {values.uplink}</pre>
          <pre>switchport mode hybrid</pre>
          {checked ? <pre>switchport hybrid tagged vlan {values.vlanpon1}-{values.vlanpon16}</pre> : <pre>switchport hybrid tagged vlan {values.vlanpon1}-{values.vlanpon8}</pre>}
          <pre>exit</pre>
        </code>
      </div>
    </div>
  )
}