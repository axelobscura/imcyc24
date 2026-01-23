"use client";
import React from "react";
import { useState, useEffect } from "react";

interface PrecioMembresiaProps {
    precio: string;
    mensaje?: string;
    handleSelectPlan?: (plan: string) => void;
}

const PrecioMembresia = (props : {
    tipo: string,
    handleSelectPlan?: (plan: string) => void
}) => {
  const [selectedTipo, setSelectedTipo] = useState<string>('mes');
  const [usePrecio, setPrecio] = useState<PrecioMembresiaProps>({
    precio: '99',
    mensaje: '1,089'
  });

  useEffect(() => {
    // You can add any side effects here if needed when selectedTipo changes
    if(props.tipo === 'proplus') {
      if(selectedTipo === 'mes') {
        setPrecio({
          precio: '299',
          mensaje: ''
        });
        props.handleSelectPlan && props.handleSelectPlan('proplus-mes');
      } else {
        setPrecio({
          precio: '3,289',
          mensaje: '$274/mes facturado anualmente'
        });
        props.handleSelectPlan && props.handleSelectPlan('proplus-anual');
      }
    } else if(props.tipo === 'pro') {
      if(selectedTipo === 'mes') {
        setPrecio({
          precio: '99',
          mensaje: ''
        });
        props.handleSelectPlan && props.handleSelectPlan('pro-mes');
      } else {
        setPrecio({
          precio: '1,089',
          mensaje: '$91/mes facturado anualmente'
        });
        props.handleSelectPlan && props.handleSelectPlan('pro-anual');
      }
    }
  }, [selectedTipo, props.tipo]);

  return (
    <>
    <div className="grid grid-cols-2 mb-3 gap-5">
        <div>
          <p className={`text-white  ${selectedTipo === 'mes' ? 'bg-blue-900 border border-spacing-2 border-blue-500' : 'bg-slate-600'} hover:bg-blue-900 text-center rounded-[20px] cursor-pointer`} onClick={() => setSelectedTipo('mes')}>MENSUAL</p>
        </div>
        <div>
          <p className={`text-white ${selectedTipo === 'año' ? 'bg-blue-900 border border-spacing-2 border-blue-500' : 'bg-slate-600'} hover:bg-blue-900 text-center rounded-[20px] cursor-pointer`} onClick={() => setSelectedTipo('año')}>ANUAL</p>
        </div>
    </div>
    <p className="text-white text-3xl font-bold">${usePrecio.precio} <span className="text-sm text-gray-400">/{selectedTipo}</span></p>
    {selectedTipo === 'año' && (
      <p className="text-green-400 font-bold mt-2">{usePrecio.mensaje}</p>
    )}
    </>
  );
};

export default PrecioMembresia;
