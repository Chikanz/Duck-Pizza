// Matter.js module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

var width = window.innerWidth, height = window.innerHeight;

var canvas = document.getElementById('canvas');
var bg = '#2b2b2b';

canvas.width = width;
canvas.height = height;

var engine = Engine.create(),
    world = engine.world;

// create renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    canvas: canvas,
    options: 
    {
        width: width,
        height: height,        
        wireframes: false,
        background: bg,
    }
});


// create two boxes and a ground

//Title
var boxA = Bodies.rectangle(width / 2, height / 4, 400, 100,
    {
    render: {
        sprite:
        {
            texture: "./img/title.png"
        }
    }
    }
);
var constraint = Constraint.create({
    pointA: { x: width / 2, y: height / 4 },
    bodyB: boxA,
    pointB: { x: -5, y: -5 },
    stiffness: 0.1,
    damping: 0.5,
    render: {
        visible: false
    }
});

World.add(engine.world, [boxA, constraint]);

//balls
AddBall("./img/ball.png");
AddBall("./img/address.png");
AddBall("./img/plus1.png");
AddBall("./img/dransk.png");
AddBall("./img/beetsaber.png");
AddBall("./img/pizza.png");
AddBall("./img/ping.png");
AddBall("./img/dumb.png");
AddBall("./img/droops.png");

// mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

World.add(world, mouseConstraint);
render.mouse = mouse;

//Finish
Render.run(render);
Engine.run(engine);


function AddBall(image)
{
    var h = height / 2 + height / 4;

    var smash = Bodies.circle(width / 2, h - getRandomInt(100), 70,
        {
            inertia: Infinity,
            render: {
                sprite:
                {
                    //./img/ball.png"
                    texture: image
                }
            }
        }
    );

    var constraint = Constraint.create(
    {
        pointA: { x: width / 2, y: h },
        bodyB: smash,
        pointB: { x: -5, y: -5 },
        stiffness: 0.01,
        damping: 0.5,
        render: {
            visible: false
        }
    });

    World.add(engine.world, [smash, constraint]);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}