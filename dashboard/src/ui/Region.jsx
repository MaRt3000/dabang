import React from 'react'
import Icon from '../assets/United.png'

const Region = () => {
  return (
    <div>
        <select name="Region" id="region">
            <option className='px-3' value="All"><img src={Icon} alt="flag" className="w-4 h-4 mr-2" />Eng (US)</option>
            <option value="Africa"><img src={Icon} alt="flag" className="w-4 h-4 mr-2" />Africa</option>
            <option value="America"><img src={Icon} alt="flag" className="w-4 h-4 mr-2" />America</option>
            <option value="Asia"><img src={Icon} alt="flag" className="w-4 h-4 mr-2" />Asia</option>
            <option value="Europe"><img src={Icon} alt="flag" className="w-4 h-4 mr-2" />Europe</option>
            <option value="Oceania"><img src={Icon} alt="flag" className="w-4 h-4 mr-2" />Oceania</option>
        </select>
    </div>
  )
}

export default Region