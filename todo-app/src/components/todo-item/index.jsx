import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

function TodoItem({ todo, fetchDetailsOfCurrentTodo }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            opacity: 0.75,
            "&:hover": {
              backgroundColor: "#000000",
              color: "#ffffff",
              opacity: 1,
            },
          }}
        >
          {" "}
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoItem;
