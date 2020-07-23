import React from 'react'
import recipes from './data/recipes'
import Step from './components/step'

export default class Recipes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes,
            recipe: {},
            currentRecipe: null
        }
    }

    componentDidMount() {
        this.loadRecipe(this.state.recipes[0])
    }

    loadRecipe(recipe) {
      console.log('loadrecipe', recipe)
        
        this.setState({
            recipe,
            currentRecipe: recipe
        })
    }

    render() {
        const { recipes, recipe, currentRecipe } = this.state
        return (

            <div className="container">
                <aside>
                    <header>
                        <p><em>Recipe</em></p>
                    </header>
                    <ul>
                        {recipes.map((item, index) => {
                            return (
                                <li key={index} className={currentRecipe === item ? 'active' : ''}>
                                    <button onClick={(e) => { this.loadRecipe(item) }} >{item.title}</button>
                                </li>
                            )
                        })}
                    </ul>
                </aside>
                
                {recipe.steps ?
                    <main>
                        <header>
 
                            <div>
                                <h1>header</h1>

                            </div>
                        </header>
                        <article>

                            <header>
                                <h1>
                                    <i>{recipe.title}</i>
                                </h1>
                            </header>

                            <ol>
                                {
                                    recipe.steps.map((item, index) => {
                                        
                                        return (
                                            <Step 
                                                id={item.id}
                                                key={item.id}
                                                title={item.title}
                                                description = {item.description}
                                                imgs={item.img.map((src, i) => {
                                                        return '/img/' + src }
                                                )}
                                            />)
                                    })
                                }
                            </ol>

                        </article>

                        <footer>
                            <h1>footer</h1>
                        </footer>
                    </main> : ''}
            </div>
        )
    }
}
