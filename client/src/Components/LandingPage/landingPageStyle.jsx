import styled from 'styled-components'

export const LandingStyle = styled.div`
    background: url('https://www.pixelstalk.net/wp-content/uploads/2016/03/Pokemon-video-games-pikachu-background-wallpaper.jpg');
    background-repeat: round;
    display: flex;
    height: 100vh;
    margin:auto;
    .general {
        margin-top:15%;
    };
    p {
        color:#011936;
        width: 600px;
        margin-left:15%;
        font-size: 40px;
        font-weight: 600;
    };
    button {
        background-color: #DE4224 ;
        border: none;
        color: white;
        padding: 10px 12px;
        text-align: left;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;
        font-weight: 600;
        margin-left:220px;
        border-radius: 10px;
    };
    button:hoover {
        background-color: #FFD79C; 
    }
    button:active {
        background-color: #DE4224;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
        color: #FFD79C;
      }
`;