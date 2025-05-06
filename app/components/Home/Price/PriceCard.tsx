import React from 'react'
import { Button } from '../../UI/Button'
import { FaCheck, FaRocket, FaCrown, FaBuilding, FaUsers } from 'react-icons/fa'
import { BsLightningCharge, BsDatabase, BsShield, BsGraphUp, BsChatDots } from 'react-icons/bs'

interface PriceCardProps {
    price: number;
    planName: string;
    features: string[];
}

const getPlanIcon = (planName: string) => {
  switch (planName.toLowerCase()) {
    case 'starter':
      return <FaRocket className="text-5xl text-white transform transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />;
    case 'pro':
      return <FaCrown className="text-5xl text-white transform transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />;
    case 'business':
      return <FaBuilding className="text-5xl text-white transform transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />;
    case 'enterprise':
      return <FaUsers className="text-5xl text-white transform transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />;
    default:
      return <FaRocket className="text-5xl text-white transform transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />;
  }
}

const getFeatureIcon = (feature: string) => {
  if (feature.toLowerCase().includes('analytics')) {
    return <BsGraphUp className="text-2xl text-green-500 mr-4 flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:animate-pulse" />;
  }
  if (feature.toLowerCase().includes('support') || feature.toLowerCase().includes('chat')) {
    return <BsChatDots className="text-2xl text-green-500 mr-4 flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:animate-pulse" />;
  }
  if (feature.toLowerCase().includes('unlimited')) {
    return <BsLightningCharge className="text-2xl text-green-500 mr-4 flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:animate-pulse" />;
  }
  if (feature.toLowerCase().includes('user')) {
    return <FaUsers className="text-2xl text-green-500 mr-4 flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:animate-pulse" />;
  }
  if (feature.toLowerCase().includes('api') || feature.toLowerCase().includes('integration')) {
    return <BsDatabase className="text-2xl text-green-500 mr-4 flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:animate-pulse" />;
  }
  return <FaCheck className="text-2xl text-green-500 mr-4 flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:animate-pulse" />;
}

const PriceCard = ({price, planName, features}: PriceCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 group">
      <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="flex flex-col items-center gap-6">
          <div className="p-4 bg-white/10 rounded-full group-hover:animate-pulse">
            {getPlanIcon(planName)}
          </div>
          <h3 className="text-2xl font-bold text-white text-center">{planName}</h3>
        </div>
      </div>
      <div className="p-8 flex flex-col items-center">
        <div className="flex items-baseline">
          <span className="text-2xl font-medium text-gray-900">$</span>
          <h4 className="text-7xl font-bold text-gray-900 tracking-tight">{price}</h4>
        </div>
        <span className="mt-2 text-gray-500 text-lg">per month</span>
      </div>
      <div className="px-8 flex-1">
        <ul className="space-y-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-600 group/item">
              {getFeatureIcon(feature)}
              <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 mt-auto">
        <Button rightIcon className="w-full items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg font-medium">Get Started</Button>
      </div>
    </div>
  )
}

export default PriceCard