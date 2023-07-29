let screen = document.getElementById('screen');

function display(numbers)
{
    screen.value += numbers;
}
function clear_screen()
{
    screen.value = "";
}
function del()
{
    screen.value =screen.value.slice(0,-1);
}
function calculation()
{
    try
    {
    screen.value = eval(screen.value);
    }
    catch(err)
    {
        screen.value = "Invalid Values";
    }
}
