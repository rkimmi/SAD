import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <Link to='/sad'><img className='angel-pic' src='starangeldither.png' /></Link>
                <div className='text-box'>
                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id vehicula metus. Aliquam ligula sem, aliquet nec elit feugiat, lacinia gravida ipsum. Sed vestibulum accumsan arcu, eget fermentum sem sagittis sit amet. Nam at neque vitae mi commodo ultricies. Morbi non purus vel nunc tristique aliquet. Nam tempor feugiat sagittis. Aenean non turpis commodo, tincidunt sapien tempus, imperdiet metus. Pellentesque vel tortor ut felis tempus faucibus rhoncus quis turpis. Nunc varius tincidunt ex vitae fermentum. Curabitur nibh erat, vehicula sit amet molestie ultrices, fermentum id lectus. Morbi sed rhoncus quam, sed vestibulum lacus. Suspendisse tincidunt at nibh sit amet auctor. Quisque laoreet efficitur imperdiet.

                Nam sit amet luctus lorem. Sed efficitur vehicula commodo. Nam imperdiet lobortis tempor. Donec at ex metus. Nunc dui nibh, ultrices vitae egestas eget, pellentesque vitae nisl. Proin in diam sollicitudin, interdum ligula eu, faucibus mauris. In non rhoncus diam. Nulla auctor diam a felis elementum porttitor. Vestibulum imperdiet dui non commodo congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus blandit lorem at sem commodo fermentum. Sed posuere, lectus ut lacinia tempus, odio mauris ultrices enim, quis imperdiet turpis enim sit amet orci. Mauris nec augue vitae mauris elementum tristique. Maecenas felis erat, laoreet ut risus venenatis, porta sagittis enim. Sed facilisis pulvinar pretium.

                Mauris pharetra facilisis sapien, quis pharetra magna blandit et. Pellentesque nec mi orci. Donec faucibus efficitur porta. Fusce consectetur eros risus, eget posuere velit elementum at. Cras quis lectus nec lacus ultrices convallis vel vel arcu. Duis vel felis id lorem rutrum gravida et varius magna. Etiam suscipit luctus nisl, scelerisque tempus lacus porttitor porta. Fusce odio quam, faucibus vel elit ultrices, dignissim tincidunt est. Sed placerat venenatis metus quis ultricies. Morbi quis rhoncus risus, et semper nisi. Proin lorem tortor, finibus et risus vitae, posuere scelerisque lectus. Nullam lacinia consectetur tellus, suscipit consectetur erat sollicitudin eu. </p>
                </div>
            </div>
        </div>
    )
}



export default Home