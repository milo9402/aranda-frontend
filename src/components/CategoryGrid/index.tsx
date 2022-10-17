import Category from '../Category'
import { CategoriesIcon } from '../../utils/categories'
import {ReactComponent as Vegetarian}  from '../../assets/icons/ic_vegetarian.svg'
import {ReactComponent as Main}  from '../../assets/icons/ic_main.svg'
import {ReactComponent as Cake}  from '../../assets/icons/ic_cake.svg'
import {ReactComponent as Fast}  from '../../assets/icons/ic_fast-food.svg'
import {ReactComponent as Kids}  from '../../assets/icons/ic_kids.svg'
import {ReactComponent as Soup}  from '../../assets/icons/ic_soup.svg'


export default function CategoryGrid() {

  const categories = () => {
    const categoryComponent = CategoriesIcon.map((element, index) => {
      let icon = null;
      if (element.categoryName === 'vegetarian') icon=<Vegetarian/>
      if (element.categoryName === 'main') icon=<Main/>
      if (element.categoryName === 'cake') icon=<Cake/>
      if (element.categoryName === 'fast-food') icon=<Fast/>
      if (element.categoryName === 'kids') icon=<Kids/>
      if (element.categoryName === 'soup') icon=<Soup/>
      return(<Category key={index} name={element.name} icon={icon} categoryName={element.categoryName}/>) 
    })
    return categoryComponent;
  }
  return (
    <div className='category_grid-section'>
      <div className='category_grid-container'>
        {
          categories()
        }
      </div>

    </div>
  )
}
