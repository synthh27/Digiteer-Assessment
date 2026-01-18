namespace TaskManager.DTOs
{
    #region Auth DTOs
    public record AuthRequest
    (
        string Email,
        string Password
    );

    public record AuthResponse
    (
        string? Message,
        int userId,
        string Email,
        string Token
    );

    public record TaskDTO
    (
        int Id,
        string Message,
        bool IsDone

    );

    #endregion Auth DTOs


    # region TASK DTOS

    public record GetTasksResponse
    (
        string? Message,
        List<TaskDTO> Tasks
    );

    public record CreateTaskRequest
    (
        string Title
    );

    public record CreateTaskResponse
    (
        int Id,
        string Title,
        bool IsDone
    );

    public record UpdateTaskRequest
    (
        string? Title,
        bool? IsDone
    );

    #endregion TASKS DTOs
}
