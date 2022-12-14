using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using disclodo.Data;
using disclodo.Dtos.User;
using disclodo.UserExtensions;
using disclodo.Models;

namespace disclodo.Services.UserService;

public class UserService : IUserService
{
    private readonly DataContext _context;
    public UserService(DataContext context)
    {
        _context = context;
    }

    public async Task<GetUserDto> RegisterUser(User user)
    {
        var createdUser = user;
        await _context.User.AddAsync(createdUser);
        await _context.SaveChangesAsync();
        return createdUser.ToGetUserDto();
    }

    public async Task<GetUserDto?> GetUserById(Guid id)
    {
        var result = await _context.User.FindAsync(id);
        if (result == null)
        {
            return null;
        }
        return result.ToGetUserDto();
    }

    public async Task<List<GetUserDto>> GetUsers()
    {
        var result = await _context.User.ToListAsync();
        return result.Select(user => user.ToGetUserDto()).ToList();
    }

    public async Task<bool> DeleteUser(Guid id)
    {
        var user = await _context.User.FindAsync(id);
        if (user == null)
        {
            return false;
        }
        _context.User.Remove(user);
        var deleted = await _context.SaveChangesAsync();
        return deleted > 0;
    }

    public async Task<User?> GetUserByUsername(string username)
    {
        var result = await _context.User.Include(u=>u.Channels).FirstOrDefaultAsync(user => user.Username == username);
        return result;
    }
    public async Task<List<GetUserDto>> SearchUser(string username)
    {
        var result = await _context.User.Where(user => user.Username.Contains(username)).ToListAsync();
        return result.Select(user => user.ToGetUserDto()).ToList();
    }
}
